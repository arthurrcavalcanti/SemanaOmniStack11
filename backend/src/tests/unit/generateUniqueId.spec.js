const UniqueId = require('../../utils/gererateUniqueId');
describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {
        const Id = UniqueId();
        
        expect(Id).toHaveLength(8);
    })
})