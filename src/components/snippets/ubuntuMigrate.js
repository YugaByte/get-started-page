export const installYB = `wget downloads.yugabyte.com/repos/reporpms/yb-apt-repo_1.0.0_all.deb
sudo apt-get install ./yb-apt-repo_1.0.0_all.deb`;

export const cleanCache = `sudo apt-get clean
sudo apt-get update`;

export const installYBVoyager = `sudo apt-get install yb-voyager
yb-voyager version`;
