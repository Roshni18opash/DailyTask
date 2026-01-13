interface newUser {
  name: string;
  isActive: boolean;
}
//@ts-ignore
function printUser(user: newUser): void {
  console.log(`${user.name} is active: ${user.isActive}`);
}

printUser({ name: "Roshni", isActive: true });
