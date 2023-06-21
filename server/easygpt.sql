\echo 'Delete and recreate easygpt db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE easygpt;
CREATE DATABASE easygpt;
\connect easygpt

\i easygpt-schema.sql


\echo 'Delete and recreate easygpt_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE easygpt_test;
CREATE DATABASE easygpt_test;
\connect easygpt_test

\i easygpt-schema.sql
