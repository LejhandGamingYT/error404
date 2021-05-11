const router = require("express").Router();
const animals = require('random-animals-api');

/**
 * @swagger
 * /image/dog:
 *   get:
 *     description: Sends a dog image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/dog", async (req, res) => {
   animals.dog()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/cat:
 *   get:
 *     description: Sends a cat image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/cat", async (req, res) => {
   animals.cat()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/bunny:
 *   get:
 *     description: Sends a bunny image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/bunny", async (req, res) => {
   animals.bunny()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/duck:
 *   get:
 *     description: Sends a duck image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/duck", async (req, res) => {
   animals.duck()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/fox:
 *   get:
 *     description: Sends a fox image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/fox", async (req, res) => {
   animals.fox()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/lizard:
 *   get:
 *     description: Sends a lizard image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/lizard", async (req, res) => {
   animals.lizard()
   .then(url => {
     res.status(200).send({ url })
   })
})


/**
 * @swagger
 * /image/shiba:
 *   get:
 *     description: Sends a shiba image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/shiba", async (req, res) => {
   animals.shiba()
   .then(url => {
     res.status(200).send({ url })
   })
})


/**
 * @swagger
 * /image/koala:
 *   get:
 *     description: Sends a koala image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/koala", async (req, res) => {
   animals.koala()
   .then(url => {
     res.status(200).send({ url })
   })
})

/**
 * @swagger
 * /image/panda:
 *   get:
 *     description: Sends a panda image
 *     tags: [Image]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/panda", async (req, res) => {
   animals.panda()
   .then(url => {
     res.status(200).send({ url })
   })
})

module.exports = {
  end: "/image/",
  router,
};