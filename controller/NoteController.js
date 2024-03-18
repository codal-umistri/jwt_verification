const {
  addNote,
  getNote,
  getAllNote,
  updateNote,
  deleteNote,
  cheackNote,
} = require("../sql/querys");

exports.addnotes = (req, res) => {
  try {
     addNote(
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

exports.getnotes = (req, res) => {
  try {
    getNote(req.userid, "NOTES", (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      return res
        .status(200)
        .json({ message: "Data fetched succesfully", data: result });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getallnotes = (req, res) => {
  try {
    getAllNote("NOTES", (error, result) => {
      if (error) return res.status(500).json({ message: error.message });

      return res
        .status(200)
        .json({ message: "Data fetched succesfully", data: result });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updatenotes = (req, res) => {
  try {
    cheackNote(
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

exports.deletenotes = (req, res) => {
  try {
    cheackNote(
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
