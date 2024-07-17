"use strict";

class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log(`[P]::signUp::`, req.body);
      // 201 khởi tạo thành công
      // 200 ok
      return res.status(201).json({
        code: "2001", // định nghiã do mỗi người
        metadata: { userid: 1 },
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AccessController();
