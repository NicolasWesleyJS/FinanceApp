const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', defalt: '#fff'},
    isDefalt: {type: 'bool', defalt: false},
    isCredit: {type: 'bool', defalt: false},
    isDebit: {type: 'bool', defalt: false},
    order: {type: 'bool', defalt: 0},
    entries: 'Entry[]',
  },
};

export default CategorySchema;