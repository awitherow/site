export const getAllActivities = `
*[_type == 'hobby']{
    _id,
    title,
    image,
    featured,
    resources[]{},
    products[]{}
}`;

export const getActivityByTitle = title => `
*[_type == 'hobby' && title match "${title}"]{
    _id,
    title,
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
        "authorName": author->name
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
