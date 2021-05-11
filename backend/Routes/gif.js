const router = require("express").Router();
const gifs = require("gifs-pro");
const SlapGif = gifs.getSlapGif();
const ClapGif = gifs.getClapGif();
const HugGif = gifs.getHugGif();

/**
 * @swagger
 * /gif/slap:
 *   get:
 *     description: Sends a slap gif
 *     tags: [Gif]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/slap", async (req, res) => {
     res.status(200).send({ SlapGif })
})

/**
 * @swagger
 * /gif/clap:
 *   get:
 *     description: Sends a clap gif
 *     tags: [Gif]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/clap", async (req, res) => {
     res.status(200).send({ ClapGif })
   })

/**
 * @swagger
 * /gif/hug:
 *   get:
 *     description: Sends a hug gif
 *     tags: [Gif]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get("/hug", async (req, res) => {
     res.status(200).send({ HugGif })
   })

module.exports = {
  end: "/gif/",
  router,
};