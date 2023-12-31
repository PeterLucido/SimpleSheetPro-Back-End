const diveData = [
  { _id: '64d3d165bccdfc65afc54cd9', diveNumber: '101', dive: 'Forward Dive Tuck', position: 'C', dd: 1.2 },
  { _id: '84f5e2748b9ecfa913d7cfad', diveNumber: '101', dive: 'Forward Dive Pike', position: 'B', dd: 1.3 },
  { _id: '6a40b80f8db840cb09ebace1', diveNumber: '101', dive: 'Forward Dive Straight', position: 'A', dd: 1.4 },
  { _id: 'c1055cf9d1d1c6b7a5783947', diveNumber: '102', dive: 'Forward 1 SS Tuck', position: 'C', dd: 1.4 },
  { _id: '1ca74f99997c6a0bfc5c10e7', diveNumber: '102', dive: 'Forward 1 SS Pike', position: 'B', dd: 1.5 },
  { _id: '97e7d62f1a413c6b9e51ef07', diveNumber: '102', dive: 'Forward 1 SS Straight', position: 'A', dd: 1.6 },
  { _id: '7e549ba382c1a5be484ae1c6', diveNumber: '103', dive: 'Forward 1 1/2 SS Tuck', position: 'C', dd: 1.6 },
  { _id: '990d9e6783c174f5ca7f2e1c', diveNumber: '103', dive: 'Forward 1 1/2 SS Pike', position: 'B', dd: 1.7 },
  { _id: 'bcf416c8c1055c7f2e1c19e1', diveNumber: '103', dive: 'Forward 1 1/2 SS Straight', position: 'A', dd: 2.0 },
  { _id: '46c8711a92b830d9b8d1654c', diveNumber: '104', dive: 'Forward 2 SS Tuck', position: 'C', dd: 2.2 },
  { _id: '8ad490c7f5e274b9ecfa913d', diveNumber: '104', dive: 'Forward 2 SS Pike', position: 'B', dd: 2.3 },
  { _id: 'e1c6a40b80f84d1973c05b8', diveNumber: '104', dive: 'Forward 2 SS Straight', position: 'A', dd: 2.6 },
  { _id: 'f84d1973c05b890d9b8d1654', diveNumber: '105', dive: 'Forward 2 1/2 SS Tuck', position: 'C', dd: 2.4 },
  { _id: '2b830d9b8d1654c1ca74f999', diveNumber: '105', dive: 'Forward 2 1/2 SS Pike', position: 'B', dd: 2.6 },
  { _id: '8db840cb09ebace1ca74f99', diveNumber: '106', dive: 'Forward 3 SS Tuck', position: 'C', dd: 2.9 },
  { _id: 'b830d9b8d1654c1ca74f999', diveNumber: '106', dive: 'Forward 3 SS Pike', position: 'B', dd: 3.2 },
  { _id: '1a413c6b9e51ef0797e7d62', diveNumber: '107', dive: 'Forward 3 1/2 SS Tuck', position: 'C', dd: 3.0 },
  { _id: '9e51ef0797e7d62f1a413c6', diveNumber: '107', dive: 'Forward 3 1/2 SS Pike', position: 'B', dd: 3.3 },
  { _id: '57b6f276a40b80f8db840cb', diveNumber: '112', dive: 'Forward Flying 1 SS Tuck', position: 'C', dd: 1.6 },
  { _id: 'a40b80f8db840cb09ebace1', diveNumber: '112', dive: 'Forward Flying 1 SS Pike', position: 'B', dd: 1.7 },
  { _id: '40b80f8db840cb09ebace1ca', diveNumber: '112', dive: 'Forward Flying 1 1/2 SS Tuck', position: 'C', dd: 1.8 },
  { _id: 'b80f8db840cb09ebace1ca74', diveNumber: '112', dive: 'Forward Flying 1 1/2 SS Pike', position: 'B', dd: 1.9 },
  { _id: 'c6b9e51ef0797e7d62f1a413', diveNumber: '201', dive: 'Back Dive Tuck', position: 'C', dd: 1.5 },
  { _id: '1ef0797e7d62f1a413c6b9e', diveNumber: '201', dive: 'Back Dive Pike', position: 'B', dd: 1.6 },
  { _id: '9797e7d62f1a413c6b9e51ef', diveNumber: '201', dive: 'Back Dive Straight', position: 'A', dd: 1.7 },
  { _id: '06b9e51ef0797e7d62f1a413', diveNumber: '202', dive: 'Back 1 SS Tuck', position: 'C', dd: 1.5 },
  { _id: '7e7d62f1a413c6b9e51ef079', diveNumber: '202', dive: 'Back 1 SS Pike', position: 'B', dd: 1.6 },
  { _id: '262f1a413c6b9e51ef0797e7', diveNumber: '202', dive: 'Back 1 SS Straight', position: 'A', dd: 1.7 },
  { _id: '62f1a413c6b9e51ef0797e7d', diveNumber: '203', dive: 'Back 1 1/2 SS Tuck', position: 'C', dd: 2.0 },
  { _id: '2f1a413c6b9e51ef0797e7d6', diveNumber: '203', dive: 'Back 1 1/2 SS Pike', position: 'B', dd: 2.3 },
  { _id: '1a413c6b9e51ef0797e7d62f', diveNumber: '203', dive: 'Back 1 1/2 SS Straight', position: 'A', dd: 2.5 },
  { _id: 'a413c6b9e51ef0797e7d62f1', diveNumber: '204', dive: 'Back 2 SS Tuck', position: 'C', dd: 2.0 },
  { _id: '13c6b9e51ef0797e7d62f1a4', diveNumber: '204', dive: 'Back 2 SS Pike', position: 'B', dd: 2.3 },
  { _id: 'c6b9e51ef0797e7d62f1a413', diveNumber: '205', dive: 'Back 2 1/2 SS Tuck', position: 'C', dd: 3.0 },
  { _id: '7e7d62f1a413c6b9e51ef079', diveNumber: '205', dive: 'Back 2 1/2 SS Pike', position: 'B', dd: 3.2 },
  { _id: '99e51ef0797e7d62f1a413c6', diveNumber: '301', dive: 'Reverse Dive Tuck', position: 'C', dd: 1.6 },
  { _id: 'a413c6b9e51ef0797e7d62f1', diveNumber: '301', dive: 'Reverse Dive Pike', position: 'B', dd: 1.7 },
  { _id: '7d62f1a413c6b9e51ef0797e', diveNumber: '301', dive: 'Reverse Dive Straight', position: 'A', dd: 1.8 },
  { _id: 'f0797e7d62f1a413c6b9e51e', diveNumber: '302', dive: 'Reverse 1 SS Tuck', position: 'C', dd: 1.6 },
  { _id: '1a413c6b9e51ef0797e7d62f', diveNumber: '302', dive: 'Reverse 1 SS Pike', position: 'B', dd: 1.7 },
  { _id: '7e7d62f1a413c6b9e51ef079', diveNumber: '302', dive: 'Reverse 1 SS Straight', position: 'A', dd: 1.8 },
  { _id: 'f1a413c6b9e51ef0797e7d62', diveNumber: '303', dive: 'Reverse 1 1/2 SS Tuck', position: 'C', dd: 2.1 },
  { _id: '1ef0797e7d62f1a413c6b9e5', diveNumber: '303', dive: 'Reverse 1 1/2 SS Pike', position: 'B', dd: 2.4 },
  { _id: '262f1a413c6b9e51ef0797e', diveNumber: '303', dive: 'Reverse 1 1/2 SS Straight', position: 'A', dd: 2.7 },
  { _id: '62f1a413c6b9e51ef0797e7d', diveNumber: '304', dive: 'Reverse 2 SS Tuck', position: 'C', dd: 2.1 },
  { _id: '2f1a413c6b9e51ef0797e7d6', diveNumber: '304', dive: 'Reverse 2 SS Pike', position: 'B', dd: 2.4 },
  { _id: '1a413c6b9e51ef0797e7d62f', diveNumber: '304', dive: 'Reverse 2 SS Straight', position: 'A', dd: 2.9 },
  { _id: 'a413c6b9e51ef0797e7d62f1', diveNumber: '305', dive: 'Reverse 2 1/2 SS Tuck', position: 'C', dd: 3.0 },
  { _id: '13c6b9e51ef0797e7d62f1a4', diveNumber: '305', dive: 'Reverse 2 1/2 SS Pike', position: 'B', dd: 3.2 },
  { _id: 'e51ef0797d62f1a413c6b9e5', diveNumber: '401', dive: 'Inward Dive Tuck', position: 'C', dd: 1.4 },
  { _id: '1ef0797e7d62f1a413c6b9e', diveNumber: '401', dive: 'Inward Dive Pike', position: 'B', dd: 1.5 },
  { _id: '7d62f1a413c6b9e51ef0797e', diveNumber: '401', dive: 'Inward Dive Straight', position: 'A', dd: 1.8 },
  { _id: 'f0797e7d62f1a413c6b9e51e', diveNumber: '402', dive: 'Inward 1 SS Tuck', position: 'C', dd: 1.6 },
  { _id: '1a413c6b9e51ef0797e7d62f', diveNumber: '402', dive: 'Inward 1 SS Pike', position: 'B', dd: 1.7 },
  { _id: '7e7d62f1a413c6b9e51ef079', diveNumber: '402', dive: 'Inward 1 SS Straight', position: 'A', dd: 2.0 },
  { _id: 'f1a413c6b9e51ef0797e7d62', diveNumber: '403', dive: 'Inward 1 1/2 SS Tuck', position: 'C', dd: 2.2 },
  { _id: '1ef0797e7d62f1a413c6b9e5', diveNumber: '403', dive: 'Inward 1 1/2 SS Pike', position: 'B', dd: 2.4 },
  { _id: '262f1a413c6b9e51ef0797e', diveNumber: '404', dive: 'Inward 2 SS Tuck', position: 'C', dd: 2.8 },
  { _id: '2f1a413c6b9e51ef0797e7d6', diveNumber: '404', dive: 'Inward 2 SS Pike', position: 'B', dd: 3.0 },
  { _id: '1a413c6b9e51ef0797e7d62f', diveNumber: '405', dive: 'Inward 2 1/2 SS Tuck', position: 'C', dd: 3.1 },
  { _id: 'a413c6b9e51ef0797e7d62f1', diveNumber: '405', dive: 'Inward 2 1/2 SS Pike', position: 'B', dd: 3.4 },
  { _id: '13c6b9e51ef0797e7d62f1a4', diveNumber: '412', dive: 'Inward Flying 1 SS Tuck', position: 'C', dd: 2.0 },
  { _id: 'f1a413c6b9e51ef0797e7d62', diveNumber: '412', dive: 'Inward Flying 1 SS Pike', position: 'B', dd: 2.1 },
  { _id: '13c6b9e51ef0797e7d62f1a4', diveNumber: '413', dive: 'Inward Flying 1 1/2 SS Tuck', position: 'C', dd: 2.7 },
  { _id: '13c6b9e51ef0797e7d62f1a4', diveNumber: '413', dive: 'Inward Flying 1 1/2 SS Pike', position: 'B', dd: 2.9 },
  { _id: '51111a6f1b8e779cb81d63ea', diveNumber: '5111', dive: 'Forward Dive, 1/2 Twists Tuck', position: 'C', dd: 1.6 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5111', dive: 'Forward Dive, 1/2 Twists Pike', position: 'B', dd: 1.7 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5111', dive: 'Forward Dive, 1/2 Twists Straight', position: 'A', dd: 1.8 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5112', dive: 'Forward Dive, 1 Twists Pike', position: 'B', dd: 1.9 },
  { _id: '81d63ea51111a6f1b8e779cb', diveNumber: '5112', dive: 'Forward Dive, 1 Twists Straight', position: 'A', dd: 2.0 },
  { _id: '63ea51111a6f1b8e779cb81d', diveNumber: '5121', dive: 'Forward 1 SS, 1/2 Twists Free', position: 'D', dd: 1.7 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5122', dive: 'Forward 1 SS, 1 Twist Free', position: 'D', dd: 1.9 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5124', dive: 'Forward 1 SS, 2 Twists Free', position: 'D', dd: 2.3 },
  { _id: '1d63ea51111a6f1b8e779cb8', diveNumber: '5126', dive: 'Forward 1 SS, 3 Twists Free', position: 'D', dd: 2.8 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5131', dive: 'Forward 1 1/2 SS, 1/2 Twist Free', position: 'D', dd: 2.0 },
  { _id: '1a6f1b8e779cb81d63ea511', diveNumber: '5132', dive: 'Forward 1 1/2 SS, 1 Twist Free', position: 'D', dd: 2.2 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5134', dive: 'Forward 1 1/2 SS, 2 Twists Free', position: 'D', dd: 2.6 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5136', dive: 'Forward 1 1/2 SS, 3 Twists Free', position: 'D', dd: 3.1 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5142', dive: 'Forward 2 SS, 1 Twist Straight', position: 'A', dd: 2.6 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5142', dive: 'Forward 2 SS, 1 Twist Pike', position: 'B', dd: 2.7 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5152', dive: 'Forward 2 1/2 SS, 1 Twist Straight', position: 'A', dd: 3.0 },
  { _id: '1d63ea51111a6f1b8e779cb8', diveNumber: '5152', dive: 'Forward 2 1/2 SS, 1 Twist Pike', position: 'B', dd: 3.2 },
  { _id: '63ea51111a6f1b8e779cb81d', diveNumber: '5211', dive: 'Back Dive, 1/2 Twist Free', position: 'D', dd: 1.8 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5212', dive: 'Back Dive, 1 Twist Free', position: 'D', dd: 2.0 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5221', dive: 'Back 1 SS, 1/2 Twist Free', position: 'D', dd: 1.7 },
  { _id: '1d63ea51111a6f1b8e779cb8', diveNumber: '5222', dive: 'Back 1 SS, 1 Twist Free', position: 'D', dd: 1.9 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5223', dive: 'Back 1 SS, 1 1/2 Twists Free', position: 'D', dd: 2.3 },
  { _id: '1a6f1b8e779cb81d63ea511', diveNumber: '5225', dive: 'Back 1 SS, 2 1/2 Twists Free', position: 'D', dd: 2.7 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5227', dive: 'Back 1 SS, 3 1/2 Twists Free', position: 'D', dd: 3.2 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5231', dive: 'Back 1 1/2 SS, 1/2 Twist Free', position: 'D', dd: 2.1 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5233', dive: 'Back 1 1/2 SS, 1 1/2 Twists Free', position: 'D', dd: 2.5 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5235', dive: 'Back 1 1/2 SS, 2 1/2 Twists Free', position: 'D', dd: 2.9 },
  { _id: '1a6f1b8e779cb81d63ea51111', diveNumber: '5251', dive: 'Back 2 1/2 SS, 1/2 Twist Straight', position: 'A', dd: 2.7 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5251', dive: 'Back 2 1/2 SS, 1/2 Twist Pike', position: 'B', dd: 2.9 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5311', dive: 'Reverse Dive, 1/2 Twist Free', position: 'D', dd: 1.9 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5312', dive: 'Reverse Dive, 1 Twist Free', position: 'D', dd: 2.1 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5321', dive: 'Reverse 1 SS, 1/2 Twist Free', position: 'D', dd: 1.8 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5322', dive: 'Reverse 1 SS, 1 Twist Free', position: 'D', dd: 2.0 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5323', dive: 'Reverse 1 SS, 1 1/2 Twists Free', position: 'D', dd: 2.4 },
  { _id: '1d63ea51111a6f1b8e779cb8', diveNumber: '5325', dive: 'Reverse 1 SS, 2 1/2 Twists Free', position: 'D', dd: 2.8 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5331', dive: 'Reverse 1 1/2 SS, 1/2 Twist Free', position: 'D', dd: 2.2 },
  { _id: '1a6f1b8e779cb81d63ea51111', diveNumber: '5333', dive: 'Reverse 1 1/2 SS, 1 1/2 Twists Free', position: 'D', dd: 2.6 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5335', dive: 'Reverse 1 1/2 SS, 2 1/2 Twists Free', position: 'D', dd: 3.0 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5351', dive: 'Reverse 2 1/2 SS, 1/2 Twist Straight', position: 'A', dd: 2.7 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5351', dive: 'Reverse 2 1/2 SS, 1/2 Twist Pike', position: 'B', dd: 2.9 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5411', dive: 'Inward Dive, 1/2 Twist Pike', position: 'B', dd: 1.7 },
  { _id: 'b8e779cb81d63ea51111a6f1', diveNumber: '5411', dive: 'Inward Dive, 1/2 Twist Tuck', position: 'C', dd: 2.0 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5412', dive: 'Inward Dive, 1 Twist Pike', position: 'B', dd: 1.9 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5412', dive: 'Inward Dive, 1 Twist Tuck', position: 'C', dd: 2.2 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5421', dive: 'Inward 1 SS, 1/2 Twist Free', position: 'D', dd: 1.9 },
  { _id: '8e779cb81d63ea51111a6f1', diveNumber: '5422', dive: 'Inward 1 SS, 1 Twist Free', position: 'D', dd: 2.1 },
  { _id: '779cb81d63ea51111a6f1b8e', diveNumber: '5432', dive: 'Inward 1 1/2 SS, 1 Twist Free', position: 'D', dd: 2.7 },
  { _id: 'a6f1b8e779cb81d63ea51111', diveNumber: '5434', dive: 'Inward 1 1/2 SS, 2 Twists Free', position: 'D', dd: 3.1 },
]

export default diveData



