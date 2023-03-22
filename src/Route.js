import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import LoginMainAuth from './presentation/navigations/auth/LoginMainAuth';
import MainNavigation from './presentation/navigations/main';

const Route = () => {
  return <>{true ? <MainNavigation /> : false ? <LoginMainAuth /> : null}</>;
};

export default Route;

const styles = StyleSheet.create({});
