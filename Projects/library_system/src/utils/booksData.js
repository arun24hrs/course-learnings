const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A novel about the American dream and the roaring twenties.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      description: "A dystopian novel about surveillance and totalitarianism.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "An exploration of the history of the human species.",
      rating: 4.6,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "A science fiction saga set on the desert planet of Arrakis.",
      rating: 4.9,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 5,
      title: "Becoming",
      author: "Michelle Obama",
      category: "Biography",
      description: "A memoir by the former First Lady of the United States.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      description: "A story about a shepherd's journey to find his destiny.",
      rating: 4.5,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 7,
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Non-Fiction",
      description: "A scientific exploration of the universe and our place in it.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 8,
      title: "The Martian",
      author: "Andy Weir",
      category: "Sci-Fi",
      description: "A thrilling story about survival on Mars.",
      rating: 4.9,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 9,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      category: "Biography",
      description: "A biography of the co-founder of Apple Inc.",
      rating: 4.6,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 10,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A classic novel about racism and injustice in the American South.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 11,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      description: "A romantic novel about the manners and matrimonial machinations of British society.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 12,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      description: "A story about the challenges of adolescence and rebellion.",
      rating: 4.4,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 13,
      title: "Brief Answers to the Big Questions",
      author: "Stephen Hawking",
      category: "Non-Fiction",
      description: "A fascinating look at the universe's greatest mysteries.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 14,
      title: "Neuromancer",
      author: "William Gibson",
      category: "Sci-Fi",
      description: "A cyberpunk novel that explores the boundaries of technology and humanity.",
      rating: 4.5,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 15,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      category: "Biography",
      description: "The wartime diary of Anne Frank, a young girl hiding from the Nazis.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 16,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Sci-Fi",
      description: "A humorous intergalactic adventure.",
      rating: 4.6,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 17,
      title: "Educated",
      author: "Tara Westover",
      category: "Biography",
      description: "A memoir about growing up in a strict and abusive household in rural Idaho.",
      rating: 4.9,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 18,
      title: "The Road",
      author: "Cormac McCarthy",
      category: "Fiction",
      description: "A post-apocalyptic tale of survival and the bond between father and son.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 19,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Non-Fiction",
      description: "A guide to building good habits and breaking bad ones.",
      rating: 4.8,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 20,
      title: "The War of the Worlds",
      author: "H.G. Wells",
      category: "Sci-Fi",
      description: "A classic alien invasion story that has inspired countless adaptations.",
      rating: 4.5,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 21,
      title: "Quiet: The Power of Introverts",
      author: "Susan Cain",
      category: "Non-Fiction",
      description: "Explores the strengths and unique traits of introverts.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 22,
      title: "Frankenstein",
      author: "Mary Shelley",
      category: "Fiction",
      description: "The haunting tale of a scientist who creates a living being.",
      rating: 4.6,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 23,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      category: "Non-Fiction",
      description: "A counterintuitive approach to living a good life.",
      rating: 4.3,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 24,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      category: "Sci-Fi",
      description: "A dystopian novel about censorship and the power of books.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    },
    {
      id: 25,
      title: "Becoming",
      author: "Michelle Obama",
      category: "Biography",
      description: "A memoir by the former First Lady of the United States.",
      rating: 4.7,
      url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
    }
  ];
  
  export default books;