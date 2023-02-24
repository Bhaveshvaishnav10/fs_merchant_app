import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import LoginMainAuth from './presentation/navigations/auth/LoginMainAuth';

const Route = () => {
  return <>{false ? null : true ? <LoginMainAuth /> : null}</>;
};

export default Route;

const styles = StyleSheet.create({});
