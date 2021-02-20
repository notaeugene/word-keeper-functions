// TODO: create database connection
const DICT_ITEMS: DictionaryItem[] = [
  { id: '1', name: 'Sample dict item 1' },
  { id: '2', name: 'Sample dict item 2' },
  { id: '3', name: 'Sample dict item 3' },
  { id: '4', name: 'Sample dict item 4' },
];

module.exports = (req, res) => {                                                      
  res.status(200).send(DICT_ITEMS)
};
