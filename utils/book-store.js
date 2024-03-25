
export const BOOKS_IN_STOCK = [
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "price": 12.99,
        "category": "Fantasy",
        "description": "The first book in J.R.R. Tolkien's epic fantasy trilogy that follows hobbit Frodo Baggins as he embarks on a quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    },
    {
        "name": "Pride and Prejudice",
        "price": 9.99,
        "category": "Romance",
        "description": "A witty social commentary by Jane Austen that follows the Bennet sisters as they search for love and happiness in their restrictive social circles.",
    },
    {
        "name": "To Kill a Mockingbird",
        "price": 11.50,
        "category": "Fiction",
        "description": "Harper Lee's Pulitzer Prize-winning novel explores racial injustice and prejudice through the innocent eyes of a young girl named Scout Finch in the American South.",
    },
    {
        "name": "Harry Potter and the Sorcerer's Stone",
        "price": 8.99,
        "category": "Fantasy",
        "description": "The first book in J.K. Rowling's beloved Harry Potter series that introduces the wizarding world and young Harry Potter's journey to Hogwarts School of Witchcraft and Wizardry.",
    },
    {
        "name": "The Hitchhiker's Guide to the Galaxy",
        "price": 7.99,
        "category": "Science Fiction",
        "description": "Douglas Adams' comedic science fiction adventure follows Englishman Arthur Dent as he escapes Earth's destruction with his friend Ford Prefect, who reveals himself to be an alien researcher for the titular Hitchhiker's Guide to the Galaxy.",
    },
    {
        "name": "One Hundred Years of Solitude",
        "price": 14.99,
        "category": "Magical Realism",
        "description": "Gabriel García Márquez's masterpiece chronicles the rise and fall of the fictional town of Macondo through the lens of the Buendía family.",
    },
    {
        "name": "The Great Gatsby",
        "price": 10.50,
        "category": "Fiction",
        "description": "F. Scott Fitzgerald's classic novel captures the Jazz Age's excesses and disillusionment through the story of Jay Gatsby, a mysterious millionaire who pines for his lost love Daisy Buchanan.",
    },
    {
        "name": "Frankenstein",
        "price": 8.49,
        "category": "Gothic Fiction",
        "description": "Mary Shelley's chilling creation tells the story of Victor Frankenstein, a scientist who creates life and grapples with the consequences.",
    },
    {
        "name": "1984",
        "price": 9.25,
        "category": "Dystopian Fiction",
        "description": "George Orwell's prophetic novel paints a chilling picture of a totalitarian state where Big Brother monitors every aspect of citizens' lives.",
    },
    {
        "name": "Jane Eyre",
        "price": 7.99,
        "category": "Classic Fiction",
        "description": "Charlotte Brontë's gothic novel tells the story of Jane Eyre, a young orphan who finds love and independence at Thornfield Hall.",
    }
];

export const categoryList = [
    "Fantasy",
    "Romance",
    "Fiction",
    "Science Fiction",
    "Magical Realism",
    "Gothic Fiction",
    "Dystopian Fiction",
    "Classic Fiction",
];

export const categoryColor = {
    "Fantasy": 'green',
    "Romance": 'blue',
    "Fiction": 'violet',
    "Science Fiction": 'red',
    "Magical Realism": 'maroon',
    "Gothic Fiction": 'orange',
    "Dystopian Fiction": 'indigo',
    "Classic Fiction": 'teal',
};

export const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};