export const getAllActivities = `
*[_type == 'hobby']{
    _id,
    name,
    image,
    featured,
    resources[]{},
    products[]{}
}`;

export const getActivityByName = name => `
*[_type == 'hobby' && name match "${name}"]{
    _id,
    name,
    description,
    image,
    tags[]-> {
        ...
    }, 
    resources[]-> {
        title,
        slug,
        description,
        mainImage,
        _updatedAt,
        "name": author->name
    },
    products[]-> {
        ...,
        image {
            "url": asset->url
        },
        tags[] -> {
            ...
        }
    }
}[0]`;
