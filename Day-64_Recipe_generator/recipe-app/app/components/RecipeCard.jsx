import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
      <Image
        src={recipe.strMealThumb}
        width={300}
        height={200}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-black">{recipe.strMeal}</h3>

        <Link href={`/recipe/${recipe.idMeal}`}>
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
