import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const oatmeal = await prisma.breakfast.create({
    data: {
      name: "Cereal",
      meals: {
        create: [
          {
            name: "Overnight Oats",
            combos: {
              create: [
                { name: "Apple Cinnamon" },
                { name: "Peanut Butter Banana" },
                { name: "Blueberry Almond" },
                { name: "Maple Pumpkin Pie" },
                { name: "Chocolate PB Banana" },
              ],
            },
          },
          {
            name: "Porridge",
            combos: {
              create: [
                { name: "Classic" },
                { name: "Brown Sugar Cinnamon" },
                { name: "Honey and Walnuts" },
              ]
            }
          },
          {
            name: "Instant Oatmeal",
            combos: {
              create: [
                { name: "Plain" },
                { name: "Brown Sugar" },
                { name: "Apple Cinnamon" },
              ]
            }
          },
          { name: "Cereal" },
          { name: "Yogurt and Granola" },
        ],
      },
    },
  });

  const breadBagel = await prisma.breakfast.create({
    data: {
      name: "Bread/Bagel",
      meals: {
        create: [
          {
            name: "Bagel with Cream Cheese",
            combos: {
              create: [
                { name: "Plain" },
                { name: "Everything" },
                { name: "Cheese" },
              ]
            }
          },
          {
            name: "Toast",
            combos: {
              create: [
                { name: "Butter" },
                { name: "Strawberry Jam" },
                { name: "Raspberry Jam" },
                { name: "PB&J"},
                { name: "Peanut Butter Honey"},
              ]
            }
          }
        ]
      }
    }
  });

  const traditional = await prisma.breakfast.create({
    data: {
      name: "Traditional",
      meals: {
        create: [
          { 
            name: "Eggs",
            combos: {
              create: [
                { name: "And Bacon" },
                { name: "And Sausage" },
                { name: "And Hashbrowns" },
              ]
            }
          },
          { name: "Pancakes" },
          { name: "Waffles" },
          {
            name: "Omelette",
            combos: {
              create: [
                { name: "Cheese" },
                { name: "Spinach and Feta" },
                { name: "Ultimate" },
                { name: "Deluxe Meat" },
                { name: "Mushroom" },
              ]
            }
          }
        ]
      }
    }
  });

  const smoothies = await prisma.breakfast.create({
    data: {
      name: "Smoothies",
      meals: {
        create: [
          { name: "Peanut Butter Banana" },
          { name: "Strawberry Banana" },
          { name: "Blueberry Peanut Butter" },
          { name: "Kale Pineapple" },
          { name: "Protein Combo" },
        ]
      }
    }
  });

  console.log('Seed data created!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });