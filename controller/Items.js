const Item = require("../model/Item")

const getItems = async (req, res) => {
    const result = await Item.find()
    return res.send(result)
}

const getSearchItems = async (req, res) => {
    const { year, topic, sector, region, pestle, source, country, city } = req.query
    let searchQuery = []
    if (year)
        searchQuery.push(
            { $match: { end_year: Number(year) } }
        )
    if (topic)
        searchQuery.push({
            $match: { topic: topic }
        })
    if (sector)
        searchQuery.push({
            $match: { sector: sector }
        })
    if (region)
        searchQuery.push({
            $match: { region: region }
        })
    if (pestle)
        searchQuery.push({
            $match: { pestle: pestle }
        })
    if (source)
        searchQuery.push({
            $match: { source: source }
        })
    if (country)
        searchQuery.push({
            $match: { country: country }
        })
    if (city)
        searchQuery.push({
            $match: { city: city }
        })



    const result = await Item.aggregate(searchQuery)

    console.log("year", result.length)
    return res.status(200).json({
        message: true,
        items: result
    })


}

module.exports = { getItems, getSearchItems }