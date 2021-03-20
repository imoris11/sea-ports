'use strict';

const _ = require('lodash');
const expect = require('chai').expect;
const rewire = require('rewire');

const cbpPorts = rewire('../index.js');

const USLAX = cbpPorts.JSON.USLAX;

describe('Unit Testing ->', () => {
  describe('Data ->', () => {
    it('should return an array', () => {
      expect(cbpPorts.JSON).to.be.an('array');
    });
  });
  describe('Methods ->', () => {
    describe('Search Functions', () => {
      describe('searchByName()', () => {
        it('should be a function', () => {
          expect(cbpPorts.searchByName).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.searchByName('Apapa')).that.is.an('array');
          expect(cbpPorts.searchByName('Apapa')).to.have.lengthOf(2);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.searchByName('YUYUYU')).to.eql([]);
        });
      });
      describe('searchByCity()', () => {
        it('should be a function', () => {
          expect(cbpPorts.searchByCity).to.be.a('function');
        });
        it('should return array of matching ports', () => {
          expect(cbpPorts.searchByCity('Lagos')).that.is.an('array');
          expect(cbpPorts.searchByCity('Lagos')).to.have.lengthOf(24);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.searchByCity('YUYUYU')).to.eql([]);
        });
      });
      describe('searchByCountry()', () => {
        it('should be a function', () => {
          expect(cbpPorts.searchByCountry).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.searchByCountry('Nigeria')).that.is.an('array');
          expect(cbpPorts.searchByCountry('Nigeria')).to.have.lengthOf(14);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.searchByCountry('YUYUYU')).to.eql([]);
        });
      });
      describe('searchPorts()', () => {
        it('should be a function', () => {
          expect(cbpPorts.searchPorts).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.searchPorts('Nigeria')).that.is.an('array');
          expect(cbpPorts.searchPorts('Nigeria')).to.have.lengthOf(14);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.searchPorts('YUYUYU')).to.eql([]);
        });
      });
    });
  });
});