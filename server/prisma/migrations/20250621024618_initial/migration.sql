-- CreateTable
CREATE TABLE "Breakfast" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Breakfast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breakfastId" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mealId" INTEGER NOT NULL,

    CONSTRAINT "Combo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_breakfastId_fkey" FOREIGN KEY ("breakfastId") REFERENCES "Breakfast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combo" ADD CONSTRAINT "Combo_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
