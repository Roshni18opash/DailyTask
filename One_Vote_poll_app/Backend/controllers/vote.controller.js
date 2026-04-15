exports.vote = async (req, res) => {
  const { optionIndex } = req.body;
  const pollId = req.params.id;
  const userId = req.user.id;

  try {
    //if duplicate vote
    await Vote.create({
      pollId,
      userId,
      optionIndex,
    });
    //increment
    await Poll.updateOne(
      {
        _id: pollId,
      },
      {
        $inc: { ["options:${optionIndex}.count"]: 1 },
      },
    );
    res.json({ message: "Vote is count" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You are not eligible ,Already voted!",
      });
    }
    throw error;
  }
};
