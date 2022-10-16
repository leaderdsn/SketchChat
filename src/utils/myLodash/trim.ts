function trim(str: string, chars?: string): string {
  if (str && !chars) {
    return str.trim();
  }

  const reg = new RegExp(`[${chars}]`, 'gi');
  return str.replace(reg, '');
}

export default trim;
