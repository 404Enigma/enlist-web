const check_class = (PRN) => {
  if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122095) {
    _class = "B1";
  } else if (Number(PRN) >= 19070122096 && Number(PRN) <= 19070122119) {
    _class = "B2";
  } else if (Number(PRN) >= 19070122120 && Number(PRN) <= 19070122145) {
    _class = "B3";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122025) {
    _class = "A1";
  } else if (Number(PRN) >= 19070122026 && Number(PRN) <= 19070122048) {
    _class = "A2";
  } else if (Number(PRN) >= 19070122049 && Number(PRN) <= 19070122072) {
    _class = "A3";
  } else if (Number(PRN) >= 19070122146 && Number(PRN) <= 19070122167) {
    _class = "C1";
  } else if (Number(PRN) >= 19070122168 && Number(PRN) <= 19070122190) {
    _class = "C2";
  } else if (Number(PRN) >= 19070122191 && Number(PRN) <= 20070122515) {
    _class = "C3";
  } else if (Number(PRN) >= 19070124001 && Number(PRN) <= 19070124028) {
    _class = "T1";
  } else if (Number(PRN) >= 19070124029 && Number(PRN) <= 19070124055) {
    _class = "T2";
  } else if (Number(PRN) >= 19070124056 && Number(PRN) <= 20070124502) {
    _class = "T3";
  }

  return _class;
};

const check_division = (PRN) => {
  if (Number(PRN) >= 19070122073 && Number(PRN) <= 19070122145) {
    _division = "B";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _division = "A";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _division = "C";
  } else if (Number(PRN) >= 19070122001 && Number(PRN) <= 19070122072) {
    _division = "IT";
  }

  return _division;
};

module.exports = { check_class, check_division };
