const { succeed, fail, repair } = require('./enhancer.js');



describe('enhancer.js', () => {

  it('should run tests without errors', ()=>{
    expect(true).toBeTruthy();
  })

  describe('.succeed()', function(){
      it('should return an item with the only change being its enhansement goes up one', function(){

          expect(succeed({
                name: "sword",
                enhancement: 10,
                durability: 50 
             })).toEqual({
                name: "sword",
                enhancement: 11,
                durability: 50 
              })
      })

      it('should return an item staying at enhancement 20', function(){
        expect(succeed({
              name: "sword",
              enhancement: 20,
              durability: 50 
           })).toEqual({
              name: "sword",
              enhancement: 20,
              durability: 50 
            })
    })
    it('Items Cannot be over a 20 of Enhancement', function(){
        expect(succeed({
              name: "sword",
              enhancement: 21,
              durability: 50 
           })).toEqual("Your Item is Can Not Exist")
    })
    it('Items Cannot be under a 0 of Enhancement', function(){
        expect(succeed({
              name: "sword",
              enhancement: -1,
              durability: 50 
           })).toEqual("Your Item is Can Not Exist")
    })
  })

  describe('.fail()', function(){
    it('Durability should fall by 5 if the enhancement is between 0 and 14', function(){
        expect(fail({
              name: "sword",
              enhancement: 14,
              durability: 50 
           })).toEqual({
              name: "sword",
              enhancement: 14,
              durability: 45 
            })
    })
    it('', function(){
        expect(fail({
            name: 'sword',
            enhancement: 16,
            durability: 50
        })).toEqual({
            name: 'sword',
            enhancement: 16,
            durability: 40
        })
    })


  })

})