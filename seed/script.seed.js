const { PrismaClient } = require ("@prisma/client");
const prisma = new PrismaClient();
const { restaurant, user } = require("./mockData.seed");
const bcrypt = require('bcrypt');

async function deleteSeed() {
  try {
    await prisma.user.deleteMany();
    await prisma.restaurant.deleteMany();
    console.log({ message: "Seed Deleted" });
  } catch (error) {
    console.error("Error deleting seed:", error);
    throw error;
  }
}

async function createRestaurant() {
  try {
    const { email, name, country, phone, address, isActive } =
      restaurant;
    const insertedRestaurant = await prisma.restaurant.create({
      data: {
        email: email.toLowerCase(),
        name: name.toUpperCase(),
        country,
        phone,
        address,
        isActive,
      },
    });

    console.log({ message: "Restaurant seed Created" });
    return insertedRestaurant;
  } catch (error) {
    console.error("Error seeding Restaurant:", error);
    throw error;
  }
}

async function createUser(restaurantId) {
  try {
    const { fullname, username, password, isMaster, isActive } = user;

    const hashPwd = await bcrypt.hash(password, 10);
    const insertedUser = await prisma.user.create({
      data: {
        fullname,
        username: username.toLowerCase(),
        password: hashPwd,
        isMaster,
        isActive,
        restaurantId,
      },
    });

    console.log({ message: "User seed Created" });
    return insertedUser;
  } catch (error) {
    console.error({ message: "Error seeding User", error });
    throw error;
  }
}

async function main() {
  if (process.env.NODE_ENV === "production")
    throw new Error(
      "Production environment, the seed only runs on Development"
    );
    await deleteSeed();
    const restaurant = await createRestaurant();
    const user = await createUser(restaurant.id);

    return {
      restaurant, 
      user
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      e
    );
    await prisma.$disconnect();
    process.exit(1);
  });
