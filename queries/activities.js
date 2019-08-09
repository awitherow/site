export const getAllActivities = `
*[_type == 'hobby']{
    _id,
    name,
    image,
}`;

export const getActivityByName = name => {
  return `
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
};
