var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


App.Store = DS.Store.extend({
  revision:12,
  adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
  this.resource('about');
  this.resource('customer');
  this.resource('customers');
});




App.Customer = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string')
});

App.Vehicle = DS.Model.extend({
  owner :App.Customer,
  plate: DS.attr('string'),
  mark: DS.attr('string'),
  model: DS.attr('string'),
  year: DS.attr('string')
});

App.Visit = DS.Model.extend({
  vehicle : App.Vehicle,
  date: DS.attr('date'),
  reason: DS.attr('string'),
  workdone: DS.attr('string'),
  descr: DS.attr('string')
});


// Index
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return "test";
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return {owner:"Trgy"};
  }
});

App.CustomersRoute = Ember.Route.extend({
  model : function(){
    //return App.Customer.find();
    return App.Customer.FIXTURES
  }
});




customer1 = {
  name: 'Ali Chereschi',
  address: 'Todaystraat, 1077 MC 111, Amsterdam',
  phone: '+31 6 78 82 99 00',
  email: 'ac111@ymail.com'
}

customer2 = {
  name: 'Huseyin Kocaslan',
  address: 'Gisterenstraat, 444 MC 55, Utrecht',
  phone: '+31 6 44 82 55 00',
  email: 'hkocas@zmail.com'
}

App.Customer.FIXTURES = [customer1, customer2]

vehicle1 ={
  owner : customer1,
  plate: '02TT99',
  mark: 'Audi',
  model: 'A6',
  year: '2012'
}

vehicle2 ={
  owner : customer1,
  plate: '88YYGR',
  mark: 'Opel',
  model: 'Astra',
  year: '2013'
}
vehicle3 ={
  owner : customer2,
  plate: '06AB9999',
  mark: 'Toyota',
  model: 'Corolla',
  year: '2014'
}

App.Vehicle.FIXTURES = [vehicle1, vehicle2, vehicle3];

App.Visit.FIXTURES = [{
  vehicle : vehicle1,
  date: new Date('29-12-2012'),
  reason: 'Yag degisimi',
  workdone: 'Yag filtresi, hava filtresi, blah blah...',
  descr: 'Cesitli notlari buraya ekleyebiliriz'
},{
  vehicle : vehicle1,
  date: new Date('22-12-2013'),
  reason: 'Motorda Ses',
  workdone: 'Yag aa, bb, cc, , hava filtresi, blah blah...',
  descr: 'Cesitli notlari hh ekleyebiliriz'
},{
  vehicle : vehicle2,
  date: new Date('22-12-2012'),
  reason: 'Yag degisimi',
  workdone: 'Yag a ,ne ,d asdasd filtresi, hava filtresi, blah blah...',
  descr: 'Cesitli notlari ehhhh ekleyebiliriz'
},{
  vehicle : vehicle3,
  date: new Date('05-01-2014'),
  reason: 'Yag degisimi',
  workdone: 'adaaaas ddfiltresi, hava filtresi, blah blah...',
  descr: 'Cesitli dd buraya ekleyebiliriz'
}]