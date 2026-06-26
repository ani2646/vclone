
//1st way to write 

/*const asyncHandler  = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
        
    } catch (error) {
      res.status(error.code).json({
        success:false,
        message:error.message
      })  
    }
}*///higher order can take a function as variable

//2nd way
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }
