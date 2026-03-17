import Image from "next/image";
const RecipeDetails = async ({ params }) => {
  const { id } = await params;
  //console.log("ID:", id);

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  const data = await res.json();
  //console.log("Data:", data);

  if (!data.meals) {
    return <h1 className="text-white text-center mt-10">No Recipe Found</h1>;
  }

  const recipe = data.meals[0];

  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>

      {recipe.strMealThumb ? (
        <Image
          src={recipe.strMealThumb}
          width="300"
          height="200"
          alt={recipe.strMeal}
        />
      ) : (
        <p>No Image Available</p>
      )}

      <h3>Category: {recipe.strCategory}</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
