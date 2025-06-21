export function getAllNotes(req, res) {
  res.status(200).send("you got 5 notes");
}

export function createNote(req, res) {
  res.status(200).send("you got 5 notes");
}

export function updateNote(req, res) {
  const { id } = req.params;
  res.status(200).send(`Note with ID ${id} updated successfully`);
}

export function deleteNote(req, res) {
  const { id } = req.params;
  res.status(200).send(`Note with ID ${id} deleted successfully`);
}
