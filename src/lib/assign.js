const check_division = (PRN) => {
  let _division;
  if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122095) {
    _division = "B1";
  } else if (Number(PRN) >= 19070122096 && Number(PRN) <= 19070122119) {
    _division = "B2";
  } else if (Number(PRN) >= 19070122120 && Number(PRN) <= 19070122145) {
    _division = "B3";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122025) {
    _division = "A1";
  } else if (Number(PRN) >= 19070122026 && Number(PRN) <= 19070122048) {
    _division = "A2";
  } else if (Number(PRN) >= 19070122049 && Number(PRN) <= 19070122072) {
    _division = "A3";
  } else if (Number(PRN) >= 19070122146 && Number(PRN) <= 19070122167) {
    _division = "C1";
  } else if (Number(PRN) >= 19070122168 && Number(PRN) <= 19070122190) {
    _division = "C2";
  } else if (Number(PRN) >= 19070122191 && Number(PRN) <= 20070122515) {
    _division = "C3";
  } else if (Number(PRN) >= 19070124001 && Number(PRN) <= 19070124028) {
    _division = "T1";
  } else if (Number(PRN) >= 19070124029 && Number(PRN) <= 19070124055) {
    _division = "T2";
  } else if (Number(PRN) >= 19070124056 && Number(PRN) <= 20070124502) {
    _division = "T3";
  }

  return _division;
};

const check_class = (PRN) => {
  let _class;
  if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122145) {
    _class = "B";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _class = "A";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _class = "C";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _class = "IT";
  }

  return _class;
};

module.exports = { check_class, check_division };
