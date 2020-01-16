export const getAllActivities = `
*[_type == 'hobby']{
    _id,
    title,
    slug,
    name,
    image,
    featured,
    resources[]{},
    products[]{}
}`;

export const getActivityByName = name => `
*[_type == 'hobby' && name match "${name}"]{
    _id,
    title,
    description,
    name,
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
        "authorName": author->name,
    },
    products[]-> {
        ...,
        image {
            "url": asset->url
        },
        tags[]-> {
            ...
        },
        provider->{
            name
        }
    }
}[0]`;
