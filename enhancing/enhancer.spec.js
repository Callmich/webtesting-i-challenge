const { succeed, fail, repair } = require('./enhancer.js');



describe('enhancer.js', () => {

  it('should run tests without errors', ()=>{
    expect(true).toBeTruthy();
  })

  describe('.succeed()', function(){
      it('should return an item with the only change being its enhansement goes up one', function(){

          expect(succeed(item)).toEqual(enhancedItem)
      })
  })








})