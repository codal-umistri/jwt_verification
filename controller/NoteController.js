const {
  addNote,
  getNote,
  getAllNote,
  updateNote,
  deleteNote,
  cheackNote,
} = require("../sql/querys");

exports.addnotes = async (req, res) => {
  try {
    if (
      req.body.description === "undefined" ||
      !!!req.body?.description?.trim() ||
      req.body.title === "undefined" ||
      !!!req.body?.title?.trim()
    )
      return res.status(400).json({ message: "Please enter details" });

    await addNote(
      req.userid,
      req.body.title,
      req.body.description,
      "NOTES",
      (error, result) => {
        if (error) return res.status(500).json({ message: error.message });
        return res.status(200).json({ message: "Note added sucessfully" });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getnotes = async (req, res) => {
  try {
    await getNote(req.userid, "NOTES", (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      return res
        .status(200)
        .json({ message: "Data fetched succesfully", data: result });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getallnotes = async (req, res) => {
  try {
    await getAllNote("NOTES", (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      return res
        .status(200)
        .json({ message: "Data fetched succesfully", data: result });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updatenotes = async (req, res) => {
  try {
    if (
      req.body.description === "undefined" ||
      !!!req.body?.description?.trim() ||
      req.body.title === "undefined" ||
      !!!req.body?.title?.trim()
    )
      return res.status(400).json({ message: "Please enter details" });

    await cheackNote(
      req.userid,
      req.body.title,
      "NOTES",
      async (error, result) => {
        if (error) return res.status(500).json({ message: error.message });

        return result.length
          ? await updateNote(
              req.userid,
              req.body.title,
              req.body.description,
              "NOTES",
              (error, result) => {
                if (error) res.status(500).json({ message: error.message });

                res.status(200).json({ message: "Note updated succesfully" });
              }
            )
          : res.status(404).json({ message: "Note not found" });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deletenotes = async (req, res) => {
  try {
    if (req.body.title === "undefined" || !!!req.body?.title?.trim())
      return res.status(400).json({ message: "Please enter details" });

    await cheackNote(
      req.userid,
      req.body.title,
      "NOTES",
      async (error, result) => {
        if (error) return res.status(500).json({ message: error.message });

        return result.length
          ? await deleteNote(
              req.userid, 
              req.body.title,
              "NOTES",
              (error, result) => {
                if (error) res.status(500).json({ message: error.message });
                 console.log(result)
                res.status(200).json({ message: "Note deleted successfully" });
              }
            )
          : res.status(404).json({ message: "Note not found" });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

