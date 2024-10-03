import { Query } from "./strapi";
const {STRAPI_HOST} = process.env
export function getHomeInfo() {
    return Query("home?populate=cover")
    .then(res => {
        const {title,description , cover } = res.data
        const image = `${STRAPI_HOST}/${cover.url}`
        return {title , description, image}
    })
}