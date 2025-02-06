const contacts = [
  { name: 'Ana', phone: '1234-5678' }
];

const addContact = (contacts, nameNewContact, phoneNewContact) => {
  return [ ...contacts, { name: nameNewContact, phone: phoneNewContact } ];
}

// Adicionar um novo contato com nome e telefone. 
const newContact = addContact([{ name: 'Ana', phone: '1234-5678' }], 'Pedro', '8765-4321');
console.log("Novo contato adicionado:", newContact);

// saída [{ name: 'Ana', phone: '1234-5678' }, { name: 'Pedro', phone: '8765-4321' }] 
const updateContact = (contacts, contactName, phone) => {
  return contacts.map(contact => contact.name === contactName ? { ...contact, phone} : contact);
}

// saída [{ name: 'Ana', phone: '0000-0000' }] 
const updatedContact = updateContact([{ name: 'Ana', phone: '1234-5678' }], 'Ana', '0000-0000');
console.log("Contato atualizado:", updatedContact); 

const removeContact = (contacts, contactName) => contacts.filter(contact => contact.name !== contactName);

// saída [] 
const removedContact = removeContact([{ name: 'Ana', phone: '1234-5678' }], 'Ana'); 
console.log("Contato removido:", removedContact);