export const getAllActivities = `
*[_type == 'hobby']{
    _id,
    name,
    description,
    image {
        "url": asset->url
    },
    tags[]-> {
        ...
    }, 
    benefits[]{
        ...
    },
    products[]-> {
        ...,
        image {
            "url": asset->url
        }
    }
}`;

export const getActivityCardData = `
*[_type == 'hobby']{
    _id,
    name,
    image {
        "url": asset->url
    }
}`;

export const getActivityByName = name => {
  console.log(name);
  return `
    *[_type == 'hobby' && name match "${name}"]{
        _id,
        name,
        description,
        image {
            "url": asset->url
        },
        tags[]-> {
            ...
        }, 
        benefits[]{
            ...
        },
        products[]-> {
            ...,
            image {
                "url": asset->url
            }
        }
    }[0]`;
};
