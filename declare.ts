/* ���� */
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
function fn(x: (a: string, b: number, c: number) => void) { }
var x1: Example;
// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(x1.diff);
??????118.112.72.187��?????����??,����??????????:

<?xml version='1.0' encoding='GB2312'?><CBSERPPGK><INFO><FUNNAM>ERAGNOPR</FUNNAM></INFO><APPAYSAVX><OPRTYP>203</OPRTYP><BNKTYP>CMB</BNKTYP><CLTNBR>0001</CLTNBR><REFNBR>wee28</REFNBR><CLTACC>755915680210402</CLTACC><TRSAMT>100</TRSAMT><BUSTYP>1</BUSTYP><OPRMOD>3</OPRMOD><PAYTYP>2</PAYTYP><RECNUM>23</RECNUM><RACINF>?����?????</RACINF><TRSUSE>test</TRSUSE><TRSINF>rrrr</TRSINF></APPAYSAVX><APSALSAVX><REVACC>6225880280120198 </REVACC><REVNAM>?��????</REVNAM><WAGMNY>100</WAGMNY></APSALSAVX></CBSERPPGK>

--------------------2020/3/19 16:32:01------------------------

��?��?��????��?��??��????������??????????:

???��ID[ERAGNOPR]

[APPAYSAVX]

BNKTYP=CMB ;BUSTYP=1 ;CLTACC=755915680210402 ;CLTNBR=0001 ;ERPTYP=H ;OPRMOD=3 ;OPRTYP=203 ;PAYTYP=2 ;RACINF=?����????? ;RECNUM=23 ;REFNBR=wee28 ;TRSAMT=100 ;TRSINF=rrrr ;TRSUSE=test

[APSALSAVX]

ERPTYP=H ;REVACC=6225880280120198 ;REVNAM=?��???? ;WAGMNY=100



