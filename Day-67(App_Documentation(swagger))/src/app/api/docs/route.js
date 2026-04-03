import swaggerJsdoc from "swagger-jsdoc";

export async function GET() {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "My API",
        version: "1.0.0",
      },
      tags: [
        {
          name: "Auth",
          description: "Authentication related endpoints",
        },
        {
          name: "Articles",
          description: "Article management endpoints",
        },
      ],
    },
    //apis: ["./src/app/api/**/*.js"],
    apis: ["./src/app/api/**/*.js", "./src/app/api/**/*.ts"],
  };

  const spec = swaggerJsdoc(options);

  return Response.json(spec);
}
