const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
//const { Tag } = require('../../models/Tag');
// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
  const tagData = await Tag.findAll({
    include: [
      {
        model:Product,
        attributes:["product_name","price","stock","category_id"]
      }
    ]
  }
  )
  res.status(200).json(tagData)

}
catch (err) {
 res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try{
    const tagData = await Tag.findByPk(req.params.id,{
      include: [
        {
          model:Product,
          attributes:["product_name","price","stock","category_id"]
        }
      ]
    }
    )
    res.status(200).json(tagData)
  
  }
  catch (err) {
   res.status(500).json(err);
  }

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag)=> {
  res.json(newTag)    
  })
  .catch((err)=> {res.json(err);})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tagData)=>{
    res.json(tagData)
  })
  .catch((err)=> {res.json(err);})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy( {
    where: {
      id:req.params.id,
    },
  }) // end .destroy
  .then( (deletedTag)=>{
    res.json(deletedTag);
  }) // end .then
  .catch((err) => {
    res.json(err)
  }) // end .catch
});

module.exports = router;
