const SingleProfile = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <>
      <h1>Single Profile page</h1>
      <p className="text-lg font-semibold ">Welcome, {user.username}!</p>
    </>
  );
};
export default SingleProfile;
