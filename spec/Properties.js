describe('Properties', function() {
  var layer;

  beforeEach(function() {
    layer = new L.Marker([0, 0]);
    layer.feature = {
      id: 1,
      properties: {
        a: 'a',
        b: 'b'
      }
    };
  });

  describe('#properties', function() {
    it('getProperty()', function() {
      var a = layer.getProperty('a');
      expect(a).to.be.equal('a');
    });

    it('setProperties() with one value', function() {
      layer.setProperties({
        a: 'b'
      });
      var a = layer.getProperty('a');
      expect(a).to.be.equal('b');
    });

    it('setProperties() with multiple values', function() {
      layer.setProperties({
        a: 'b',
        b:'a'
      });
      var a = layer.getProperty('a');
      var b = layer.getProperty('b');
      expect(a).to.be.equal('b');
      expect(b).to.be.equal('a');
    });

    it('setProperties() should not add new property', function() {
      var c = layer.getProperty('c');
      expect(c).to.be.undefined;
      layer.setProperties({
        c:'c'
      });
      c = layer.getProperty('c');
      expect(c).to.be.undefined;
    });

    it('addProperties() with one value', function() {
      layer.addProperties({
        c:'c'
      });
      var c = layer.getProperty('c');
      expect(c).to.be.equal('c');
    });

    it('addProperties() with multiple values', function() {
      layer.addProperties({
        c:'c',
        d:'d'
      });
      var c = layer.getProperty('c');
      var d = layer.getProperty('d');
      expect(c).to.be.equal('c');
      expect(d).to.be.equal('d');
    });

    it('addProperties() should not change existent property', function() {
      layer.addProperties({
        a:'c'
      });
      var a = layer.getProperty('a');
      expect(a).to.not.equal('c');
    });

    it('deleteProperty() with one value', function() {
      layer.deleteProperty(['a']);
      var a = layer.getProperty('a');
      expect(a).to.be.undefined;
    });

    it('deleteProperty() with multiple values', function() {
      layer.deleteProperty(['a','b']);
      var a = layer.getProperty('a');
      var b = layer.getProperty('b');
      expect(a).to.be.undefined;
      expect(b).to.be.undefined;
    });

    it('deleteProperty() with nonexistent value', function() {
      layer.deleteProperty(['c']);
      var c = layer.getProperty('c');
      expect(c).to.be.undefined;
    });
  });

});
