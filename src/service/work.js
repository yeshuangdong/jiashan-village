/**
 *  work module request
 */
import axios from '@/axios'

/**
 * 根据品牌基本信息，包含 内容，艺人列表
 * @param brandName 品牌名称
 */
export const getBrandBase = (brandName) => {
    return axios.get(`/brand/base/${ brandName }`)
}

/**
 * 获取 内容/艺人 基本信息
 * @param type content artist
 * @param name  内容或者艺人名字
 * @param doubanId 内容或者艺人 doubanId
 */
export const getBaseInfo = (type, name, doubanId) => {
    return axios.get(`/${ type }/base/${ name }/${ doubanId }`)
}

/**
 * 获取 内容/艺人 详细信息
 * @param type content artist
 * @param name  内容或者艺人名字
 * @param doubanId 内容或者艺人 doubanId
 */
export const getDetailInfo = (type, name, doubanId) => {
    return axios.get(`/${ type }/detail/${ name }/${ doubanId }`)
}


/**
 * 获取 内容/艺人 排名
 * @param type  content artist
 * @param rankField 排序字段
 * @param name 内容或者艺人名字
 * @param doubanId 内容或者艺人 doubanId
 */
export const getRankInfo = (type, rankField, name, doubanId) => {
    return axios.get(`/${ type }/rank/${ rankField }/${ name }/${ doubanId }`)
}

/**
 * 获取 内容/艺人 daily 信息
 * @param type content artist
 * @param name 内容或者艺人名字
 * @param doubanId 内容或者艺人 doubanId
 * @query begin end
 */
export const getDailyInfo = (type, name, doubanId, params) => {
    return axios.get(`/${ type }/daily/${ name }/${ doubanId }`, {
        params
    })
}

/**
 * 获取 品牌 daily 信息
 * @param brandName 品牌名字
 * @query begin end 开始 / 结束时间
 */
export const getBrandDaily = (brandName, params) => {
    return axios.get(`/brand/daily/${ brandName }`, {
        params
    })
}

/**
 * 获取社交列表信息
 * @param weiboName 微博名称
 * @param nameType content artist brand
 * @param socialType 话题：topic；热搜：hotspot
 * @query sortType 排序方式
 * @query sortField 排序字段
 * @query start 开始行
 * @query limit 结束行
 */
export const getSocialList = (weiboName, nameType, socialType, params) => {
    return axios.get(`/social/list/${ weiboName }/${ nameType }/${ socialType }`, {
        params
    })
}

/**
 * 获取社交营销信息列表
 * @param artistName 艺人名字
 * @param brandName 品牌名字
 * @query plathform 平台名称
 * @query limit 结束行
 * @query start 开始行
 */
export const getBusinessSocial = (artistName, brandName, params) => {
    return axios.get(`/social/business/${artistName}/${brandName}`, {
        params
    })
}

/**
 * 获取品牌权益列表
 * @param brandName 品牌名字
 * @param params 
 */
export const getBrandSocial = (brandName, params) => {
    return axios.get(`/social/business/brand/${ brandName }`, {
        params
    })
}

/**
 * 获取社交营销聚合值
 * artistName 艺人名字
 * brandName 品牌名字
 * platform 平台名称
 */
export const getSocialCount = (artistName, brandName, params) => {
    return axios.get(`/social/count/${ artistName }/${ brandName }`, {
        params
    })
}

/**
 * 获取品牌社交营销轨迹
 * artistName
 * brandName
 */
export const getBrandTrail = (artistName, brandName, params) => {
    return axios.get(`/social/business/${ artistName }/${ brandName }`, {
        params
    })
}

/**
 * 获取艺人作品日程
 * @param name 艺人名字
 * @param doubanId 艺人 doubanId
 * @query begin end
 */
export const getSchedule = (name, doubanId, params) => {
    return axios.get(`/content/base/artist/${name}/${doubanId}`, {
        params
    })
}

/**
 * 获取权益列表
 * @query brandName 品牌的名称
 * @query artistName 艺人名称
 * @query contentName 内容名称
 * @query placeType 植入类型
 * @query platform 平台类别
 * @query rightType 内容：content；广告：ad
 * @query start 开始行
 * @query limit 结束行
 */
export const getEquity = (params) => {
    return axios.get(`/right/list/`, {
        params
    })
}

/**
 * 获取权益数量
 * @query brandName 品牌的名称
 * @query artistName 艺人名称
 * @query contentName 内容名称
 * @query placeType 植入类型
 * @query platform 平台类别
 * @query rightType 内容：content；广告：ad
 */
export const getEquityCount = (params) => {
    return axios.get(`/right/count`, {
        params
    })
}

/**
 * 获取权益聚合对象
 * @query aggField 聚合字段
 * @query aggType 聚合类型，sum，count
 * @query brandName 品牌的名称
 * @query artistName 艺人名称
 * @query contentName 内容名称
 * @query placeType 植入类型
 * @query platform 平台类别
 * @query rightType 内容：content；广告：ad
 */
export const getEquityAgg = (params) => {
    return axios.get(`/right/agg`, {
        params
    })
}

/**
 * 获取监控品牌列表
 * brandName 品牌名称
 */
export const getWatchBrand = (brandName) => {
    return axios.get(`/brand/base/list/${ brandName }`)
}

/**
 * 获取品牌最近合作内容
 * brandName
 */
export const getCooperation = (brandName) => {
    return axios.get(`/brand/base/latest/${ brandName }`)
}

/**
 * 获取品牌排名
 * @param rankField 排序字段
 * @param fieldValue 排序字段值
 * @param brandName 品牌名称
 */
export const getBrandRank = (rankField, fieldValue, brandName) => {
    return axios.get(`/brand/rank/${ rankField }/${ fieldValue }/${ brandName }`)
}