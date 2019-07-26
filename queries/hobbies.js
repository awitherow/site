export const getAllHobbies = `
*[_type == 'hobby']{
    _id,
    name,
    description,
    image {
        "url": asset->url
    },
    tags[]-> {
        ...,
    }, 
    benefits,
    products[]-> {
        ...,
        image {
            "url": asset->url
        }
    }
}`;
