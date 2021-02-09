INSERT INTO airplanes 
(plane_type, passenger_count)
VALUES
($1, $2);
-- (${type}, ${passengers});

SELECT * FROM airplanes;

