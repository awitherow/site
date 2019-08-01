module.exports.getAllActivities = `
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

module.exports.getActivityCardData = `
*[_type == 'hobby']{
    _id,
    name,
    image {
        "url": asset->url
    }
}`;

module.exports.getActivityByName = function(name) {
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
