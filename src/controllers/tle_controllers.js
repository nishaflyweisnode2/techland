const Tle_model = require('../models/TLE_model');



exports.AddTLE = async (req, res) => {
    try {
        const data = {
            size: 1,
            price: 1,
            TLT: 1,
        }
        const TleData = await Tle_model.create(data);
        console.log(TleData);
        res.status(200).json({
            message: "Success",
            data: TleData
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

exports.GetTLT = async (req, res) => {
    try {
        const TLTData = await Tle_model.find();
        console.log(TLTData);
        res.status(200).json({
            size: TLTData[0].size,
            price: TLTData[0].price,
            TLT: TLTData[0].TLT
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }
}

const tltValueUpdate = async (size, TLT, price, id) => {
    const updateTLT = await Tle_model.findOneAndUpdate({ _id: id }, {
        size: size,
        TLT: TLT,
        price: price
    })
    return updateTLT;
}

exports.updateTLT = async (req, res) => {
    try {
        const telData = await Tle_model.findById({ _id: req.params.id });
       const id = req.params.id ;
        console.log(telData)
        if (req.body.price) {
            const price = req.body.price
            const size = price  + telData.size
            const TLT = price + telData.TLT
            const price1 = price + telData.price
            tltValueUpdate(size, TLT, price1, id)
            res.status(200).json({
                message: "TLT Data is Updated "
            })
            // TLT
        } else if (req.body.TLE) {
            const TLE = req.body.TLE;
            if(TLE > telData.TLT){
                const size = TLE - telData.size
                const TLT = TLE 
                const price1 = TLE - telData.price
                tltValueUpdate(size, TLT, price1, id);

            }
            const size = TLE + telData.size
            const TLT = TLE  + telData.TLT
            const price1 = TLE + telData.price
            tltValueUpdate(size, TLT, price1, id);
            res.status(200).json({
                message: "TLT Data is Updated "
            })
        } else if (req.body.size) {
            const size = req.body.size;
            const size1 = size  + telData.size
            const TLT = size + telData.TLT
            const price1 = size + telData.price
            tltValueUpdate(size1, TLT, price1, id)
            res.status(200).json({
                message: "TLT Data is Updated "
            })
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
}