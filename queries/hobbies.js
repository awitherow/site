export const getAllHobbies = `
*[_type == 'hobby']{
    _id,
    name,
    description->,
    image,
    tags->,
    benefits,
    products
}`;
