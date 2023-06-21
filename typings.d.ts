type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface mainImage {
  _type: 'image';
  asset: 'reference';
}

interface Title {
  _type: 'string';
  current: string;
}

interface CV extends Base {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
}

interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  logo: Image;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  logo: Image;
}

interface Skill {
  skill: string;
  logo: Image;
}

interface Language {
  language: string;
  proficiency: string;
}

interface Certification {
  name: string;
  date: string;
  logo: Image;
  institution: string;
  link: string;
}
