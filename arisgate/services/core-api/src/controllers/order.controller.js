// Controller responsible for starting verification

exports.startVerification = async (req, res) => {

    try {

        // Extract order information from request body
        const order = req.body //undefined

        console.log("Incoming order verification:", order)

        // For now we only return a response
        // Later this will trigger LBS validation and OTP verification

        return res.json({

            status: "verification_started",
            message: "ArisGate verification initiated",
            order: order

        })

    } catch (error) {

        console.error(error)

        res.status(500).json({

            error: "Internal verification error"

        })

    }

}