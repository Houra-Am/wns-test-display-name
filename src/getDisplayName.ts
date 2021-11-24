const getDisplayName = (
  firstName: string,
  lastName: string,
  city: string = "",
  curriculum: string = ""
) => {
  const isCitySpecified = city || "?";
  const isCurriculumSpecified = curriculum === "work-study" ? " - WnS" : "";
  return `[${isCitySpecified}] ${firstName} ${lastName}${isCurriculumSpecified}`;
};

export default getDisplayName;
